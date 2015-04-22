'use strict';

module.exports = function(app) {

    var User = app.models.User;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;

    User.create({
            username: 'Admin',
            email: 'admin@gmail.com',
            password: 'opensesame'
        },
        function(err, user) {

            if (err) {
                throw new Error('Can\'t create sample user');
            }

            Role.create({
                name: 'admin'
            }, function(err, role) {

                if (err) {
                    throw new Error('Can\'t create admin role');
                }

                role.principals.create({
                    principalType: RoleMapping.USER,
                    principalId: user.id
                });

            });

        });

};

