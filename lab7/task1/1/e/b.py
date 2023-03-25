def power(a,n):
    x=1
    for i in range(n):
        x*=a
    return x
a,n=input().split()
print(power(float(a),int(n)))