class CreateLibraries < ActiveRecord::Migration
  def change
    create_table :libraries do |t|
      t.string :name
      t.text :content
      t.string :read_time
      t.integer :price

      t.timestamps null: false
    end
  end
end
