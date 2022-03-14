#include <stdio.h>
#include <time.h>
#include <stdlib.h>
#include <Windows.h>


int main(void)
{
    while (1) {   
        time_t t = time(NULL);
        struct tm* aTm = localtime(&t);
        
        system("cls");
        int year = aTm->tm_year-103;
        int months = aTm->tm_mon+1;
        int days = aTm->tm_yday+1;
        int hours = aTm->tm_hour+1;
        int minutes = aTm->tm_min+1;
        int seconds = aTm->tm_sec+1;

        printf("    Lived time: \n\n");
        printf("years:       %d\n", year);
        printf("months:      %d\n", 12 * year + months-3);
        printf("days:        %d \n", year * 365 + days-90);
        printf("hours:       %ld\n", year* 365 * 24 + hours);
        printf("minutes:     %ld \n", year * 365 * 24 * 60 + minutes);
        printf("seconds:     %ld\n",(year * 365 * 24 * 60 * 60 + 145) + seconds);
        printf("\n");
    
        printf("31%% [*****##########] \n");
        printf("Average lived time:\n\n");
        printf("years:       %d\n", 62);
        printf("months:      %d\n", 62 * 12);
        printf("days:        %d\n", 62 * 365);
        printf("hours:       %d\n", 62 * 365 * 24 + 23);
        printf("minutes:     %d\n", 62 * 365 * 24 * 60 + 33);
        printf("seconds:     %d\n", 62 * 365 * 24 * 60 * 60 + 178);
        
        Sleep(1000);
    }
}    