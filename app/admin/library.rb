ActiveAdmin.register Library do
  permit_params :name, :content, :read_time, :price, :subject_id, :description, :video, :github, :preview
end
