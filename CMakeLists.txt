cmake_minimum_required(VERSION 3.10)

set(CMAKE_CXX_STANDARD 20)

project(scratch_cpp)

find_package(fmt CONFIG REQUIRED)
find_package(raylib CONFIG REQUIRED)

add_executable(scratch_cpp src/main.cpp)

target_link_libraries(scratch_cpp PRIVATE fmt::fmt)
target_link_libraries(scratch_cpp PRIVATE raylib)