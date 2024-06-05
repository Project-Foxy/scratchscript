#include "raylib.h"

int main()
{
    InitWindow(800, 600, "scratch_cpp project - basic window");

    while (!WindowShouldClose())
    {
        BeginDrawing();
            ClearBackground(RAYWHITE);
            DrawText("Congrats! You created your first window!", 100, 200, 30, LIGHTGRAY);
        EndDrawing();
    }

    CloseWindow();

    return 0;
}