#include <iostream>

using namespace std;

int main(){
    
    char* ptr[3] = {"AAA", "BBB", "CCC"};
    for(int i=0; i<3; i++){
        cout<<ptr[i]<<endl;
    }
    return 0;
}