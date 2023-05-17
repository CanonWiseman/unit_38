-BUG #1: Added await to logins User.authenticate so tokens wont be created without matching passwords

-BUG #2: 

-BUG #3: get all users route should return only basic information but returns phone and email in addition to needed info 

-BUG #4: 

-BUG #5: changed how update field gets variables from req.body so only necessary fields will be passed in for changes

-BUG #6: Changed jwt.decode() to jwt.verify() to ensure more security