...others : It is a spread operator
Aim: To remove the password field in the response to the user in login part.
In Auth.js, const{password, ...others}=user._doc; spread operator is used.
Using spread operator ,others  variable will include every attribute in user ,except password.
Why ._doc ise used ? : A Mongoose document includes metadata,some methods and _doc object ._doc object includes the actual data of the document.To destructure the _doc object which actually contains the password field ,user._doc is used.
If only user is used instead of user._doc ,it means we are attempting to destructure the entire user object and password field is not accesssible as a top level property of thhe document.
Hence, user._doc is used.

Why in hashing adding salt is required?
To make the passwords more secure.
The hashing algorithms produce same and fixed length output for a specific string. So adding salt(a string) ,generates a different hashed password at different instants.This can be acheived using bcrypt module.