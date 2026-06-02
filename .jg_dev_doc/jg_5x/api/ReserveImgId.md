# Reserve Imgage Id

1) catId in parameter 
2) parent::add() ->  J! ApiController.add() -> J! ApiController.save() 
3) Save: instantiate JG image model
4) From model get JG table
5) Data from json 
6) (patch handling)
7) preprocessSaveData(): possibility to overwrite and change data
8) Set jform to  component /forms path
9) validate data by JG model (Standard Form)
10) Save by JG model 
    * $uploader is HTML
    * JForm files = null ==> not isImgUploaded
    * prepareTable () -> ordering
    * $table->store()
    * SetState () image.id, image.new
11) Get recordId over state
12) Display item
    * View by name and type by document
    * instantiate JG image model
    * Set state 'ID' in model
    * Set Document to images 
    * Images:JsonapiView -> displayItem() 
