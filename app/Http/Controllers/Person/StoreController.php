<?php

namespace App\Http\Controllers\Person;


use App\Models\Person;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Person\StoreRequest;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        Person::create($data);

        return response([]);
    }
}