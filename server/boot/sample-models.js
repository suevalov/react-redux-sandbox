'use strict';

module.exports = function(app) {
    var User = app.models.User;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;

    User.create({
            'username': 'Admin',
            email: 'admin@gmail.com',
            password: 'opensesame' },
        function(err, user) {

            Role.create({
                name: 'admin'
            }, function(err, role) {

                role.principals.create({
                    principalType: RoleMapping.USER,
                    principalId: user.id
                });

            });

        });

};

