# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



list  = List.find_or_create_by(date: Date.current)

3.times { |i| Task.find_or_create_by(list: list, title: "Task ##{i + 1}") }

6.times { |i| Tag.find_or_create_by(name: "Tag ##{i + 1}") }

Tag.find_in_batches(batch_size: 2).with_index do |tags, batch|
  tags.each { |tag| TagTask.find_or_create_by(tag: tag, task_id: batch) }
end
