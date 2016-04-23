class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable, :omniauthable

         has_many :subscriptions
         has_many :libraries, through: :subscriptions

         validates_presence_of :username, length: {maximum: 40}
         validates :first_name, presence: true, length: {maximum: 25}
         validates :last_name, presence: true, length: {maximum: 25}

         # def confirmation_required?
         #  false
         # end

         def self.from_omniauth(auth)
            user = User.where(email: auth.info.email).first

            if user
              return user
            else
              where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
                user.first_name = auth.info.first_name
                user.last_name = auth.info.last_name
                user.username = auth.info.name
                user.provider = auth.provider
                user.uid = auth.uid
                user.email = auth.info.email
                user.image = auth.info.image
                user.password = Devise.friendly_token[0,20]
                user.skip_confirmation!
              end
            end
         end
end
