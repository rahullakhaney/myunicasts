class Library < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: [:slugged, :finders]
  has_many :lessons
  belongs_to :subject

  has_many :subscriptions
  has_many :users, through: :subscriptions

  validates :name, presence: true, length: { maximum: 50 }
  validates :content, presence: true, length: { maximum: 5000 }
  validates :price, presence: true, numericality: { only_integer: true }
  validates :read_time, presence: true, numericality: { only_integer: true }

  def price_in_cents
    price*100
  end

  def str_tags=(input_tags)
    self.tags = input_tags.split(/\W+/).map do |tag|
      Tag.find_or_create_by(name: tag.downcase)
    end
  end

  # This method will show the existing tags in our form
  def str_tags
    tags.map(&:name).join(' ')
  end
  
end
