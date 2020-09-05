# React Table Semantic UI

## Getting Started

React Component example of semantic-ui table featuring sorting, page fotter and global search bar.

### Features
1. Sorting
2. Page fotter
3. Search bar

### Live

[a link](https://github.com/user/repo/blob/branch/other_file.md)

### Prerequisites

```
nodejs
```

### Installing

```
npn install
```
### Running

```
npm run dev
```

### Simple Example Usage

```
  <CustomTable
    data={[{
        name: "jason",
        lastName: "parra",
        phone: "+1 (555) 333 4444",
        email: "example1@gmail.com",
        age: "20",
    },
    {
        name: "Juan",
        lastName: "Perez",
        phone: "+1 (888) 500 2220",
        email: "example2@gmail.com",
        age: "35"
    }]}
        headers={["Nombre", "Apellido", "Teléfono", "Correo", "Edad"]}
        labels={["name", "lastName", "phone", "email", "age"]}
        defaultPages={10}
        searchQuery={search} //Optional
    />
```

### Screenshots

![alt text](./assets/capture_1.png)


