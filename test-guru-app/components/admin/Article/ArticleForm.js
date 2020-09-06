
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

import { useMutate } from "restful-react";
import RichMarkDownEditor from "rich-markdown-editor";

class YoutubeEmbed extends React.Component {
  render() {
    const { attrs } = this.props;
    const videoId = attrs.matches[1];

    return (
      <p align="center">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
          width='640'
          height='480'
        />
      </p>
    );
  }
}

const ArticleForm = ({ onSubmit, initialData = {} }) => {
  const [articleTitle, setArticleTitle] = useState(null);
  const [articleContent, setArticleContent] = useState(null);
  const { register, handleSubmit, setValue, errors } = useForm({ defaultValues: initialData });

  const [setting, setSetting] = useState({
    template: false,
    value: '',
  })

  const { mutate: uploadImage, loading, error } = useMutate({
    verb: 'POST',
    path: `${process.env.TEST_GURU_API_URL}/images/upload`
  });

  const saveUploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    const result = await uploadImage(formData)
    console.log('Upload image! %o', result)

    return result.secure_url
  }

  const handleChange = (x) => {
    // const text = value();
    console.log(`%o`, setting);
    // setArticleContent({ value: text })
  };

  const handleUpdateValue = () => {
    const existing = "";
    const value = `${existing}\n\nedit!`;

    setSetting({ value })
  };

  useEffect(() => {
    register({ name: 'articleTitle' });
    register({ name: 'articleContent' });
  }, [register])

  useEffect(() => {
    const { articleTitle, articleContent } = initialData;
    if (articleTitle) { setArticleTitle(articleTitle) }
    if (articleContent) { setArticleContent(articleContent) }
  }, [initialData])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="articleTitle">Title</label>
        <input className="form-control" type="text" id="articleTitle" name="articleTitle" placeholder="Title" required
          ref={register({ required: "Required" })} />
      </div>
      <div className="form-group">
        <label>Content</label>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-12 blog-details">
                <RichMarkDownEditor
                  id="articleContent"
                  defaultValue=""
                  value={setting.value}
                  template={setting.template}
                  uploadImage={file => {
                    return saveUploadImage(file);
                  }}
                  onSave={options => console.log("Save triggered", options)}
                  onChange={handleChange}
                  embeds={[
                    {
                      title: "YouTube",
                      keywords: "Test Guru Vietnam",
                      icon: () => (
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg"
                          width={24} height={24} />
                      ),
                      matcher: url => {
                        return url.match(
                          /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([a-zA-Z0-9_-]{11})$/i
                        );
                      },
                      component: YoutubeEmbed,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="articleThumbnailYoutube">Thumbnail</label>
        <input className="form-control" type="text" id="articleThumbnailYoutube" name="articleThumbnailYoutube"
          placeholder="Thumbnail Youtube Link" ref={register} />
      </div>
      <div className="m-t-20">
        <button className="btn btn-primary btn-lg" type="submit">Save</button>
      </div>
    </form>
  )
}

export default ArticleForm;
