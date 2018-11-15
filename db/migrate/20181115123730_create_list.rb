class CreateList < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.date :date,  null: false, default: -> { 'NOW()' }
      t.timestamps   null: false
    end
  end
end
