def reversed_list (arr):
    for i in range(len(arr)):
        if type(arr[i])==type([]):
            arr[i]=arr[i][::-1]
            reversed_list(arr[i])

    stt=str(arr[::-1]).replace("[","*")
    stt=stt.replace("]","[")
    stt=stt.replace("*","]")
    return (stt)

print(reversed_list((input("Tersine çevirmek istediğiniz listeyi giriniz: "))))