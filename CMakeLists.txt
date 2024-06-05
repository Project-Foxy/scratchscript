cmake_minimum_required(VERSION 3.10)

set(CMAKE_CXX_STANDARD 20)

project(scratch_cpp)

find_package(fmt CONFIG REQUIRED)
find_package(raylib CONFIG REQUIRED)

add_executable(scratch_cpp src/main.cpp)

file(MAKE_DIRECTORY ${CMAKE_CURRENT_BINARY_DIR}/Debug/assets)

add_custom_command(
    TARGET scratch_cpp PRE_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy_directory
        ${CMAKE_SOURCE_DIR}/assets
        ${CMAKE_CURRENT_BINARY_DIR}/Debug/assets
)

target_link_libraries(scratch_cpp PRIVATE fmt::fmt)
target_link_libraries(scratch_cpp PRIVATE raylib)