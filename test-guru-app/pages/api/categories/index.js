import dbConnect from '../../../db/dbConnect'
import Categories from '../../../db/models/Categories'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const categories = await Categories.find({})
        res.status(200).json({ success: true, data: categories })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'POST':
      try {
        const createdCategory = await Categories.create({
          ...req.body
        })

        res.status(201).json({ success: true, data: createdCategory })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}