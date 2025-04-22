import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

// static TinyMCE assets as before
import 'tinymce/tinymce'
import 'tinymce/icons/default'
import 'tinymce/themes/silver'
import 'tinymce/models/dom'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/link'
import 'tinymce/plugins/image'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/code'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/media'
import 'tinymce/plugins/table'
import 'tinymce/plugins/help'
import 'tinymce/plugins/wordcount'

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 pl-1 font-medium">
          {label}
        </label>
      )}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          // On mobile this will sit at the bottom of your form (order-last)
          <div className="order-last md:order-none mt-4 md:mt-0 border border-gray-300 rounded-lg overflow-hidden">
            <Editor
              initialValue={defaultValue}
              init={{
                license_key: 'gpl',
                base_url: '/tinymce',
                suffix: '.min',
                skin_url: '/tinymce/skins/ui/oxide',
                content_css: '/tinymce/skins/ui/oxide/content.css',
                height: 500,
                menubar: true,
                plugins: [
                  'advlist','autolink','lists','link','image',
                  'charmap','preview','anchor','searchreplace',
                  'visualblocks','code','fullscreen','insertdatetime',
                  'media','table','help','wordcount'
                ],
                toolbar:
                  'undo redo | blocks | bold italic forecolor | ' +
                  'alignleft aligncenter alignright alignjustify | ' +
                  'bullist numlist outdent indent | link image media | code | help',
                content_style:
                  'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
              onEditorChange={onChange}
            />
          </div>
        )}
      />
    </div>
  )
}