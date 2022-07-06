@extends('layouts.admin')

@section('title', 'Edit')

@section('content')
    <div class="container">
            @if ($errors->any())
                <div class="alert alert-danger" role="alert">
                    <ul>
                        @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
        <div class="row">
            <div class="col-8 offset-2">
                <form action="{{ route('admin.posts.update', $post) }}"
                method="POST">
                @csrf
                @method('PUT')
                    <div class="mb-3">
                      <label for="title" class="form-label">Titolo</label>
                      <input type="text" name="title"
                      value="{{ old ('title', $post->title)}}"
                      class="form-control @error('title') is-invalid @enderror" id="title"
                      placeholder="Inserisci un titolo">
                      @error('title')
                        <p class="text-danger">{{ $message }}</p>
                      @enderror
                    </div>
                    <div class="mb-3">
                      <label for="content" class="form-label">Contenuto del post</label>
                      <textarea
                      name="content" id="content"
                      class="form-control @error('content') is-invalid @enderror" cols="30" rows="10">{{ old('content' , $post->content) }}</textarea>
                      @error('title')
                        <p class="text-danger">{{ $message }}</p>
                      @enderror
                    </div>
                    <button type="submit" class="btn btn-primary">Crea</button>
                  </form>
            </div>
        </div>
    </div>
@endsection
