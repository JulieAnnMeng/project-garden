puts 'seeding Users 🌱'
demo = User.create(firstName: 'Demo', lastName: 'Friend', username: 'Demo', email: 'demofriend@email.com', password_digest:BCrypt::Password.create('demo12345'))
