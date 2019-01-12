class CreateTagTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tag_tasks do |t|
      t.belongs_to :tag,  null: false, index: true, foreign_key: true
      t.belongs_to :task, null: false, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
