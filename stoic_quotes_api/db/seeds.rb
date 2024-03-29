# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Stoic.create(name: 'Marcus Aurelius')

Quote.create([
    {phrase: 'You have power over your mind — not outside events. Realize this, and you will find strength.', stoic_id: 1},
    {phrase: 'If it is not right, do not do it; if it is not true, do not say it.', stoic_id: 1}
])