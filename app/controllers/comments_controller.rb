# frozen_string_literal: true

class CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      redirect_to({ action: :index }, flash: { success: 'Comment was successfully created' })
    else
      if request.xhr? && request.format.html?
        render partial: 'form', locals: { comment: @comment }, layout: false, status: :bad_request
      else
        render 'new'
      end
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :privacy)
  end
end
