
import express from 'express';
import { MultiUpload, upload } from '../middleware/upload.js';
import { MultiUploadImage, UploadImage } from '../controllers/uploadImage.controller.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home',{name:"anhlthph29890"})
})
router.get('/tintuc', (req, res) => {
    res.send('tin tức')
})
router.post('/upload',upload.single("image"),UploadImage)
router.post('/multiload',MultiUpload.array("images"),MultiUploadImage)
export default router