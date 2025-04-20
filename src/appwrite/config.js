// src/appwrite/config.js
import conf from "../conf/conf.js";
import { Client, Databases, ID, Query } from "appwrite";

const { cloudinaryCloudName, cloudinaryUploadPreset } = conf;

export class Service {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  /**
   * Create a new post document in Appwrite
   * @param {{ title: string, slug: string, content: string, featuredImage: string, status: string, userId: string }} doc
   */
  async createPost(doc) {
    return this.databases.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      doc.slug,
      doc
    );
  }

  /**
   * Update an existing post
   * @param {string} id — document ID (slug)
   * @param {object} payload — fields to update
   */
  async updatePost(id, payload) {
    return this.databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id,
      payload
    );
  }

  /**
   * Delete a post document
   * @param {string} id — document ID (slug)
   */
  async deletePost(id) {
    await this.databases.deleteDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id
    );
    return true;
  }

  /**
   * Fetch a single post by ID
   * @param {string} id — document ID (slug)
   */
  async getPost(id) {
    return this.databases.getDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      id
    );
  }

  /**
   * List posts by optional queries (e.g. [Query.equal("status", "active")])
   * @param {Array} queries 
   */
  async getPosts(queries = [Query.equal("status", "active")]) {
    return this.databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      queries
    );
  }

  /**
   * Upload a file to Cloudinary via unsigned preset
   * @param {File} file — browser File object
   * @returns {Promise<string>} — secure URL of the uploaded asset
   */
  async uploadFile(file) {
    console.log("Using Cloudinary preset:", cloudinaryUploadPreset);
    const url = `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/upload`;
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", cloudinaryUploadPreset);

    const res = await fetch(url, { method: "POST", body: form });
    const data = await res.json();

    if (!res.ok) {
      console.error("Cloudinary upload error →", data);
      throw new Error(data.error?.message || "Cloudinary upload failed");
    }

    return data.secure_url;
  }
}

export default new Service();