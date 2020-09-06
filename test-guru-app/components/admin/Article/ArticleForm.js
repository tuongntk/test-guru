
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
  const [categoryName, setCategoryName] = useState(null);
  const [categoryDescription, setCategoryDescription] = useState(null);
  const { register, handleSubmit, setValue, errors } = useForm({ defaultValues: initialData });

  const [setting, setSetting] = useState({
    template: false,
    value: undefined,
  })

  const { mutate: uploadImage, loading, error } = useMutate({
    verb: 'POST',
    path: `${process.env.TEST_GURU_API_URL}/images/upload`
  });

  const _uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    const result = await uploadImage(formData)
    console.log('Upload image! %o', result)

    return result.secure_url
  }

  const handleToggleTemplate = () => {
    setSetting({ template: !setting.template })
  };

  const handleUpdateValue = () => {
    const existing = "";
    const value = `${existing}\n\nedit!`;

    setSetting({ value })
  };

  useEffect(() => {
    register({ name: 'categoryName' });
    register({ name: 'categoryDescription' });
  }, [register])

  useEffect(() => {
    const { categoryName, categoryDescription } = initialData;
    if (categoryName) { setCategoryName(categoryName) }
    if (categoryDescription) { setEndDate(categoryDescription) }
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
                  defaultValue="Hello world!"
                  value={setting.value}
                  template={setting.template}
                  uploadImage={file => {
                    console.log("File upload triggered: ", file);
                    return _uploadImage(file);
                  }}
                  embeds={[
                    {
                      title: "YouTube",
                      keywords: "youtube video tube google",
                      icon: () => (
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg"
                          width={24}
                          height={24}
                        />
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
