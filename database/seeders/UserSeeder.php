<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'usuario1',
            'email' => 'usuario1@gmail.com',
            'password' => bcrypt('12345678')
        ]);
        
    }
}
