import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import service from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title:   post?.title   || "",
        slug:    post?.$id     || "",
        content: post?.content || "",
        status:  post?.status  || "active",
      },
    });

  const navigate = useNavigate();
  const userId = useSelector(s => s.auth.userData)?.$id;

  const onSubmit = async (data) => {
    if (!userId) return navigate("/login");
    let imageUrl = post?.featuredImage || "";
    if (data.image?.[0]) {
      imageUrl = await service.uploadFile(data.image[0]);
    }

    const payload = {
      title:         data.title,
      slug:          data.slug,
      content:       data.content,
      status:        data.status,
      featuredImage: imageUrl,
      userid:        userId,
    };

    if (post) {
      await service.updatePost(post.$id, payload);
      navigate(`/post/${post.$id}`);
    } else {
      payload.slug = data.slug
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-");
      const created = await service.createPost(payload);
      navigate(`/post/${created.$id}`);
    }
  };

  const slugTransform = useCallback(v => {
    if (typeof v !== "string") return "";
    return v.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
  }, []);

  useEffect(() => {
    const sub = watch((v, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(v.title), {
          shouldValidate: true,
        });
      }
    });
    return () => sub.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug"
          {...register("slug", { required: true })}
          onInput={e =>
            setValue("slug", slugTransform(e.target.value), {
              shouldValidate: true,
            })
          }
        />
        <RTE
          label="Content"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image"
          type="file"
          accept="image/*"
          {...register("image", { required: !post })}
        />
        {(getValues("image")?.[0] || post?.featuredImage) && (
          <div className="mb-4">
            <img
              src={
                getValues("image")?.[0]
                  ? URL.createObjectURL(getValues("image")[0])
                  : post.featuredImage
              }
              alt="Preview"
              className="rounded-md w-full object-cover"
            />
          </div>
        )}
        <Select
          label="Status"
          options={["active", "inactive"]}
          {...register("status")}
        />
        <Button type="submit" className="w-full">
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}