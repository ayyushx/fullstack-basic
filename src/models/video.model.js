import mongoose from "mongoose"

const videoSchema = new mongoose.Schema(
    {
        videoname : {
            type : String,
            required : [true, "This field is required"]
        },
        likecount : {
            type : int
        },

    }
);

export const Videos = new mongoose.model("Videos" , videoSchema );