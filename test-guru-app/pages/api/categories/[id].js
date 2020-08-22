import dbConnect from '../../../db/dbConnect'
import Categories from '../../../db/models/Categories'

export default async function handler(req, res) {
  const { query: { id }, method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const category = await Categories.findById(id)
        if (!category) {
          return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: category })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    // case 'PUT':
    //   try {
    //     const category = await Categories.findByIdAndUpdate(id, req.body, {
    //       new: true,
    //       runValidators: true,
    //     })
    //     if (!category) {
    //       return res.status(400).json({ success: false })
    //     }
    //     res.status(200).json({ success: true, data: category })
    //   } catch (error) {
    //     res.status(400).json({ success: false })
    //   }
    //   break

    // case 'DELETE':
    //   try {
    //     const deletedCategory = await Categories.deleteOne({ _id: id })
    //     if (!deletedCategory) {
    //       return res.status(400).json({ success: false })
    //     }
    //     res.status(200).json({ success: true, data: {} })
    //   } catch (error) {
    //     res.status(400).json({ success: false })
    //   }
    //   break

    default:
      res.status(400).json({ success: false })
      break
  }
}