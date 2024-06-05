#include "raylib.h"
#include <stdio.h>

int main()
{
    SetConfigFlags(FLAG_WINDOW_RESIZABLE);
    InitWindow(800, 600, "scratch_cpp project - basic window");
    ;

    Font roboto_font = LoadFont("assets/fonts/Roboto/Roboto-Regular.ttf");

    if (!IsFontReady(roboto_font)) {
        fprintf(stderr, "Failed to load font\n");
    }

    MaximizeWindow();
    
    Texture2D nikee_256 = LoadTexture("assets/images/nikee_256.png");


    while (!WindowShouldClose())
    {
        BeginDrawing();
            ClearBackground(WHITE);
            
            DrawTextEx(roboto_font, "v0.1.0a - 05.06.24", Vector2((float)(GetScreenWidth() - 130), (float)(GetScreenHeight() - 20)), 20.0f, 0.0f, BLACK);
            
            // DrawTextureEx(nikee_256, Vector2((float)(GetScreenWidth() / 2 - 256 / 2), (float)(GetScreenHeight() / 2 - 256 / 2)), 0.0f, 1.0f, WHITE);

            DrawTextEx(roboto_font, "Hello World!", Vector2((float)(GetScreenWidth() / 2 - 256 / 2), (float)(GetScreenHeight() / 2 - 256 / 2)), 40.0f, 0.0f, BLACK);

            // DrawFPS(GetScreenWidth() - 85, 0);
        EndDrawing();
    }

    UnloadFont(roboto_font);
    CloseWindow();

    return 0;
}