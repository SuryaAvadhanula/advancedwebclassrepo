<script setup lang="ts">
    import { Post } from '../models/posts';
    const { post } = defineProps<{ post: Post }>();
    console.log(post);
</script>
<template>
                            <div class="card" >
                            <div class="card-image">
                              <figure class="image is-4by3">
                                <img :src="post.src" alt="Placeholder image">
                              </figure>
                            </div>
                                <button class="delete"></button>
                            <div class="card-content">
                              <div class="media">
                                <div class="media-left">
                                  <figure class="image is-48x48">
                                    <img :src="post.user.pic" alt="Placeholder image">
                                  </figure>
                                </div>
                                <div class="media-content">
                                  <p class="title is-4"> {{ post.user.firstName }} {{ post.user.lastName }}</p>
                                  <p class="subtitle is-6">@{{ post.user.handle }}</p>
                                </div>
                              </div>

                              <div class="content">
                                  <br />
                                <a>@bulmaio</a>.
                                <a href="#">#css</a> <a href="#">#responsive</a>
                                <br>
                                <time datetime="2022-25-05">11:09 PM - April 25, 2022</time>
                              </div>
                            </div>
                          </div>
</template>
<style scoped>
</style>