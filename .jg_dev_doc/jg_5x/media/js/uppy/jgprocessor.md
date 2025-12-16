
# jgprocessor.js handling

## Apply changes

A change in the file itself has no effect until the use of  
```npm run build```  
in folder  
```\media\com_joomgallery\js\uppy```  

This will collect the file and the uppy files into 
```\media\com_joomgallery\js\uppy\dist\uppy-uploader.js``` 
for 'webpack' loading. 

More see weppack below

## Returning errors

The returned errors are displayed with the "debug information" button in a modal window. 


WIP => ? which kind of errors , ? who returns what, ? 

### Backend

2025.12.16:

??? An error 'response' starts with a ```\n```

### Site

2025.12.16:

? in function/class/outside

1) Error in source code like 'Undefined constant'  ``yyy`;''' in function/class/outside
   is returned with 'response.ok: false', 'success: false', and no 'fatal error' detected  
   => exit in !response.ok:  res = {success: false, status: response.status, message: response.statusText, messages: {}, data: {error: res}};  
   => Returned is a complete html web page with error stack inside.  
   => No need to split by '\n'

2) Function not found 
   is returned with 'response.ok: true' and no 'fatal error' detected  
   => exit in new last else code:  res = {success: false, status: response.status, message: response.statusText, messages: {}, data: {error: res}};  
   => Returned is a complete html web page of upload view. The first line tells ```Upload of file xxxx.jpg using Uppy failed.```   Then OK and then the upload view
   => No need to split by '\n'

3) throw new \Exception('For parent-dependent content types, the parent_pk must be given!', 1);  
   is returned with 'response.ok: true' and ```res.startsWith('{"success"')```  
   => exit in res.startsWith:  res converted to object and added response status and data
   => Returned is a message in res
   => No need to split by '\n'

Error "For parent-dependent content types, the parent_pk must be given!"


x) Sometimes the complete page is displayed insead of a stack  
   => No need to split by '\n'




with network error (requiring ajaxsave). 

A error in source code like 'Undefined constant' is returned with network error (requiring ajaxsave). Returned is a complete web page with error stack inside





??? when An error 'response' starts with a ```<br>```  
It may contain the complete web page with error stack below


### How to test errors 

How to return error mesages ? and warning ?
[Joomla manual: Ajax and JsonResponse](https://manual.joomla.org/docs/next/general-concepts/javascript/ajax/#jsonresponse---enqueued-messages)

??? Kind of errors 


* Joomla enqueue error, warning, notice ...
* throw
* *.php file not compilable

## Passing Language Constants to JavaScript

Info:

[Joomla manual: Passing Language Constants to JavaScript](https://manual.joomla.org/docs/general-concepts/javascript/adding-javascript/#passing-language-constants-to-javascript)



## **Webpack**

The commands need a installed weppack  (and therfore npm)

install local
```npm install --save-dev webpack```

Attention: Local installation may add webpack file into the project. Make sure these files are ignored by .gitignore file in root folder.

install global
```npm install -g webpack```




