ActiveAdmin.register Lesson do
  permit_params :title, :note, :video, :header, :tag, :read_time, :library_id

  sortable tree: false,
            sorting_attribute: :tag

            index :as => :sortable do
              label :title

              actions
            end
            index do
              selectable_column
              column :header
              column :title
              column :tag
              column :library
              column :read_time

              actions
            end
end
