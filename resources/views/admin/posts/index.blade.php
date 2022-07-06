@extends('layouts.admin')

@section('content')
<div class="container">
    <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Titolo</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        @foreach ($posts as $post)
            <tr>
                <th scope="row">{{ $post->id }}</th>
                <td><a href="#" class="text-reset">{{ $post->title }}</a></td>
                <td>
                    <a class="btn btn-success" href="#" role="button">Show</a>
                    <a class="btn btn-primary" href="#" role="button">Edit</a>
                    <form
                    class="d-inline"
                    >
                    @csrf
                        <button type="submit" class="btn btn-danger">Delete</button>
                    </form>
                </td>
            </tr>
        @endforeach
      </table>
</div>
@endsection
