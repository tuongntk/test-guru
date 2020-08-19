  
import React, { useCallback, useMemo, useState } from 'react'
import { Editor, Transforms, createEditor } from 'slate'
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import { withHistory } from 'slate-history'

import BasePage from '../../components/layouts/admin/BasePage'
import Header from '../../components/layouts/admin/Header'
import PageWrapper from '../../components/layouts/admin/PageWrapper'
import PageHeader from '../../components/layouts/admin/PageHeader'
import SideBar from '../../components/layouts/admin/SideBar'

import { Button, Icon, Toolbar } from '../../components/layouts/admin/Editor/ToolBar'
const LIST_TYPES = ['numbered-list', 'bulleted-list']

const initialValue = [
  {
    children: [
      { text: 'This is editable plain text, just like a <textarea>!' },
    ],
  },
]

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true,
  })

  Transforms.setNodes(editor, {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  })

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === format,
  })

  return !!match
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>
    default:
      return <p {...attributes}>{children}</p>
  }
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

export default function Home() {
  const [value, setValue] = useState(initialValue)
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  return (
    <BasePage>
      <Header />
      <SideBar />
      <PageWrapper>
        <PageHeader title="Add Blog" />
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 blog-details">
                    <form>
                      <div className="form-group">
                        <label>Blog Name</label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>Blog Images</label>
                        <div>
                          <input className="form-control" type="file" />
                          <small className="form-text text-muted">Max. file size: 50 MB. Allowed images: jpg, gif, png. Maximum 10 images only.</small>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Blog Category</label>
                            <select className="select select2-hidden-accessible form-control" tabIndex={-1} aria-hidden="true">
                              <option>Web Design</option>
                              <option>Web Development</option>
                              <option>App Development</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Blog Sub Category</label>
                            <select className="select select2-hidden-accessible form-control" tabIndex={-1} aria-hidden="true">
                              <option>Html</option>
                              <option>Css</option>
                              <option>Javascript</option>
                              <option>PHP</option>
                              <option>Codeignitor</option>
                              <option>iOS</option>
                              <option>Android</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Blog Description</label>

                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-12 blog-details">
                                <Slate editor={editor} value={value} onChange={value => setValue(value)}>
                                    <Toolbar>
                                      <MarkButton format="bold" icon="format_bold" />
                                      <MarkButton format="italic" icon="format_italic" />
                                      <MarkButton format="underline" icon="format_underlined" />
                                      <MarkButton format="code" icon="code" />
                                      <BlockButton format="heading-one" icon="looks_one" />
                                      <BlockButton format="heading-two" icon="looks_two" />
                                      <BlockButton format="block-quote" icon="format_quote" />
                                      <BlockButton format="numbered-list" icon="format_list_numbered" />
                                      <BlockButton format="bulleted-list" icon="format_list_bulleted" />
                                    </Toolbar>
                                  <Editable  renderElement={renderElement}
                                    renderLeaf={renderLeaf}
                                    placeholder="Enter some rich text…"
                                    spellCheck
                                    autoFocus />
                                </Slate>
                              </div>
                            </div>  
                          </div>
                        </div>

                      </div>
                      <div className="form-group">
                        <label className="display-block w-100">Blog Status</label>
                        <div>
                          <div className="custom-control custom-radio custom-control-inline">
                            <input className="custom-control-input" id="active" name="active-blog" defaultValue="active" type="radio" defaultChecked />
                            <label className="custom-control-label" htmlFor="active">Active</label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline">
                            <input className="custom-control-input" id="inactive" name="active-blog" defaultValue="inactive" type="radio" />
                            <label className="custom-control-label" htmlFor="inactive">Inactive</label>
                          </div>
                        </div>
                      </div>
                      <div className="m-t-20 text-center">
                        <button className="btn btn-primary btn-lg">Publish Blog</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </PageWrapper>
    </BasePage>
  )
}
