@extends('layouts.admin')

@section('content')
    <div class="container">
        <h2>ID : {{ $post->id }}</h2>
        <h3>" {{ $post->title }} "</h3>
        <p>" {{ $post->description }} "</p>
        <a href="{{ route('admin.posts.index') }}" class="btn btn-dark"><< Torna all'elenco</a>
    </div>
@endsection
