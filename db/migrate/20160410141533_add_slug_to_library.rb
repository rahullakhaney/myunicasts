class AddSlugToLibrary < ActiveRecord::Migration
  def change
    add_column :libraries, :slug, :string
    add_index :libraries, :slug, unique: true
  end
end
