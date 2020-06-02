
import { FilePond ,registerPlugin } from 'react-filepond'


import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'


registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export default FilePond;


