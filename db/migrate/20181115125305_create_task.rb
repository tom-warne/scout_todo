class CreateTask < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.belongs_to :list,     null: false, index: true, foreign_key: true
      t.text       :title,    null: false
      t.boolean    :complete, null: false, default: false

      t.timestamps null: false
    end
  end
end
