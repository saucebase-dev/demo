<?php

namespace Modules\Demo\Tests\Feature;

use Modules\Demo\Database\Seeders\DatabaseSeeder;
use Tests\TestCase;

class DatabaseSeederTest extends TestCase
{
    public function test_module_database_seeder_runs(): void
    {
        $this->seed(DatabaseSeeder::class);

        $this->assertTrue(true);
    }
}
