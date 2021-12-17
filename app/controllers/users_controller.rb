class UsersController < ApplicationController
    # skip_before_action :authorize, only: [:create, :show, :update]

    def create
        user = User.create(user_params)
        session[:user_id] = user.id  
        render json: user, status: :created
    end

    
    private
    def user_params
        params.permit(:id, :firstName, :lastName, :username, :password, :password_confirmation, :new_password, :new_password_confirmation)
    end
end
