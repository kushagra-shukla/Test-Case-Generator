# Test-Case-Generator
A simple REST API made with node.js to help problem setters in generating robust test cases of competitive programming problems.

# Get-Request via Query Strings
`https://<hostname>/api/q=?dataStr=<data structure>&dataType=<data type>&number=<number of test cases>&min=<range lower limit>&max<range upper limit>`

There will be addition and removal of certain queries parameters depending upon the type of data structure and data type selected.

## Following examples will make things clear.

`localhost:8000/api/?dataStr=PRIMITIVE&dataType=int&number=6&min=100&max=110`

`localhost:8000/api/?dataStr=PRIMITIVE&dataType=int&number=6&min=100&max=110&duplicate_flag=false`

`localhost:8000/api/?dataStr=PRIMITIVE&dataType=char&number=10&charSet=.#`

`localhost:8000/api/?dataStr=ARRAY&dataType=char&size=4&number=5&charSet=abcd&duplicate_flag=false&repetition_flag=false`

Most queries are simple and self-explanatory. Although something which requires our attention are the flag queries. 
These are the only optional query parameters rest all are required for some combination of the data structure and data type.

# Required Query Parameters
* dataStr : Stores the data structure. Supported options are `PRIMITIVE` and `ARRAY`.
* dataType : Stores the data type within the data structure. Supported options are `char`, `int`, `float` and `double`.
* size : Stores the size of `ARRAY`. Required only if the data structure used is `ARRAY`.
* number : Stores the number of test cases required. 
* min : Stores the lower limit (including itself) of the range of values that need to be covered in test cases.
* max : Stores the upper limit (not including itself) of the range of values that need to be covered in test cases. 
  > Mathematically, Range = [min,max) : min,max ∈ **I** :yum:
* charSet : Stores the character set out of which the test cases of `char` data type will be generated.
  > URL reserved characters, such as, `/`, `\`, `&`, `?`, etc  need to be URL encoded (like, %2F for `/`)

# Optional Query Parameter
* duplicate_flag : When `true` it implies that no two test case instances will be same or equal in the generated test cases.
  * When it is not set or supplied in GET query it defaults to `false`
  * Eg. [ 1, 2, 1] [1, 2, 1] will be rejected. However, [1, 1, 1] and [2, 2, 2] are passed. 
* repetition_flag : When `true` it implies that within each test case instance no two `PRIMITIVE` data type will be same in the generated test cases. 
  * When it is not set or supplied in GET query it defaults to `false`
  * To use this flag the duplicate_flag must be present in query
  * Only applicable for data structures other than `PRIMITIVE`
  * Eg. [1, 2, 1] will be rejected. However, [1, 2, 3] will be passed. As the value of `PRIMITIVE` data type `int` is repeated in `ARRAY` [1, 2, 1]
  * Eg. [1, 2, 3] [1, 2, 3] will both pass if `duplicate_flag = false` and `repetition_flag = true`. Because we are not restricting duplicate test case instances. 
