
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

const CategoryForm = ({ onSubmit, initialData = {} }) => {
  const [categoryName, setCategoryName] = useState(null);
  const [categoryDescription, setCategoryDescription] = useState(null);
  const { register, handleSubmit, setValue, errors } = useForm({ defaultValues: initialData });

  useEffect(() => {
    register({ name: 'categoryName' });
    register({ name: 'categoryDescription' });
  }, [register])

  useEffect(() => {
    const { categoryName, categoryDescription } = initialData;
    if (categoryName) { setCategoryName(categoryName) }
    if (categoryDescription) { setCategoryDescription(categoryDescription) }
  }, [initialData])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <div className="col-md-3 mb-3">
          <label htmlFor="categoryName">Name</label>
          <input type="text" className="form-control" id="categoryName" name="categoryName" placeholder="Category name" required
            ref={register({ required: "Required" })} />
        </div>
        <div className="col-md-9 mb-3">
          <label htmlFor="categoryDescription">Description</label>
          <input type="text" className="form-control" id="categoryDescription" name="categoryDescription" placeholder="Category description"
            ref={register} />
        </div>
      </div>
      <button className="btn btn-primary" type="submit">Add</button>
    </form>
  )
}

export default CategoryForm;
