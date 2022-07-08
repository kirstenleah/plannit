class PostsController < ApplicationController

    def index
        render json: Post.all
    end

    def show
        p = Post.find(params[:id])
        render json: p
    end

    def create
        p = Post.create!(post_params)
        render json: p, status: :created
    end

    def destroy
        p = Post.find(params[:id])
        p.destroy
        head :no_content
    end

    private
    def post_params
        params.permit(:country_code, :content, :category, :image, :city)
    end
end
