// QuizNova - Quiz Logic
// Questions organized by subject and difficulty level

var allQuestions = {

  Python: {
    easy: [
      ["What does Python use for indentation?", "Curly braces", "Spaces or Tabs", "Semicolons", "Parentheses", 2],
      ["Which keyword is used to define a function?", "function", "def", "func", "define", 2],
      ["What is the output of print(2 ** 3)?", "6", "8", "9", "5", 2],
      ["Which data type is immutable?", "List", "Dictionary", "Tuple", "Set", 3],
      ["How do you write a comment in Python?", "// comment", "/* comment */", "# comment", "-- comment", 3],
      ["What is the correct file extension for Python?", ".py", ".pt", ".pyt", ".python", 1],
      ["Which function converts string to integer?", "str()", "int()", "float()", "chr()", 2],
      ["What does len() return?", "Last element", "Length of the object", "Memory address", "Data type", 2],
      ["Which loop does NOT exist in Python?", "for", "while", "do-while", "nested for", 3],
      ["How do you declare a list in Python?", "list = ()", "list = {}", "list = []", "list = <>", 3]
    ],
    medium: [
      ["What is a lambda function?", "A named function", "An anonymous function", "A class method", "A generator", 2],
      ["Which method adds an item to a list?", "add()", "push()", "append()", "insert()", 3],
      ["What does *args allow in a function?", "Keyword arguments", "Variable number of positional arguments", "Default values", "Optional arguments", 2],
      ["What is list comprehension?", "A loop inside a class", "A short way to create lists", "A sorting method", "A filter function", 2],
      ["What is __init__ used for in Python?", "To delete an object", "To initialize an object when created", "To compare objects", "To copy an object", 2],
      ["Which module is used for math operations?", "calc", "math", "num", "arithmetic", 2],
      ["What does the pass keyword do?", "Skips current iteration", "Does nothing, used as a placeholder", "Raises an exception", "Returns None", 2],
      ["What is PEP 8?", "Python version 8", "Python coding style guide", "An error code", "A module name", 2],
      ["What does enumerate() return?", "Only the index", "Only the value", "Index and value pairs", "Length of list", 3],
      ["Which is the correct way to open a file?", "open('f','r')", "file.open('f')", "read('f')", "load('f')", 1]
    ],
    hard: [
      ["What is the GIL in Python?", "Global Integer Limit", "Global Interpreter Lock", "Generic Import Library", "Generator Index List", 2],
      ["What does @staticmethod mean?", "Method bound to instance", "Method that needs no self or cls argument", "Creates a property", "Overrides a method", 2],
      ["What is a generator in Python?", "A function that returns a list", "A function that uses the yield keyword", "An async function", "A class-based iterator", 2],
      ["What does __slots__ do in a class?", "Adds methods dynamically", "Limits which attributes objects can have", "Enables serialization", "Creates a class template", 2],
      ["What is a metaclass in Python?", "A class of a class", "An abstract class", "A mixin class", "An interface", 1],
      ["Which is NOT a valid Python magic method?", "__len__", "__str__", "__define__", "__repr__", 3],
      ["What is asyncio used for?", "Threading", "Asynchronous I/O operations", "Multiprocessing", "Garbage collection", 2],
      ["What does functools.lru_cache do?", "Clears memory", "Caches function results to avoid recomputation", "Logs function calls", "Limits recursion depth", 2],
      ["What is MRO in Python OOP?", "Module Resolution Order", "Method Resolution Order", "Memory Resource Order", "Multiple Return Object", 2],
      ["What does monkey patching mean?", "A debugging technique", "Modifying a class or module at runtime", "A design pattern", "A testing framework", 2]
    ]
  },

  Java: {
    easy: [
      ["Java is a __ language.", "Interpreted only", "Compiled and Interpreted", "Machine language", "Assembly language", 2],
      ["Which keyword defines a class in Java?", "def", "class", "struct", "object", 2],
      ["JVM stands for?", "Java Virtual Machine", "Java Variable Method", "Java Version Manager", "Java Void Main", 1],
      ["Which data type stores whole numbers in Java?", "float", "double", "int", "char", 3],
      ["How do you print output in Java?", "print()", "console.log()", "System.out.println()", "echo()", 3],
      ["Parent class of all Java classes is?", "Base", "Root", "Object", "Super", 3],
      ["Which is NOT a Java primitive type?", "int", "boolean", "String", "char", 3],
      ["What does the static keyword mean?", "Variable that keeps changing", "Belongs to the class, not an object", "Private access", "Final value", 2],
      ["Java programs run on which platform?", "Windows only", "JVM on any operating system", "Linux only", "Browser only", 2],
      ["Which keyword is used for inheritance in Java?", "implements", "extends", "inherits", "uses", 2]
    ],
    medium: [
      ["What is method overloading?", "Same name, different parameters", "Overriding a parent method", "Multiple return types", "An abstract method", 1],
      ["What is an interface in Java?", "Abstract class with variables", "A class with only abstract methods", "A private class", "A final class", 2],
      ["Which collection does not allow duplicates?", "ArrayList", "LinkedList", "HashSet", "Vector", 3],
      ["What does the final keyword do in Java?", "Makes class abstract", "Prevents modification or override", "Enables inheritance", "Creates singleton", 2],
      ["What is autoboxing in Java?", "Auto import", "Automatic conversion from primitive to wrapper class", "Array to list conversion", "String formatting", 2],
      ["Which exception is a checked exception?", "NullPointerException", "ArrayIndexOutOfBoundsException", "IOException", "ClassCastException", 3],
      ["What does the this keyword refer to?", "The superclass", "The current object instance", "A new object", "A static reference", 2],
      ["Difference between == and equals() in Java?", "No difference", "== checks reference, equals() checks actual value", "equals() is always faster", "== is for objects only", 2],
      ["What is the role of a constructor?", "To destroy an object", "To initialize an object when it is created", "To copy an object", "To call the parent class", 2],
      ["What is a lambda expression in Java 8?", "An anonymous class", "A short way to implement a functional interface", "A generic type", "An abstract method", 2]
    ],
    hard: [
      ["What is the volatile keyword in Java?", "A constant variable", "Ensures a variable is always read from main memory", "A thread-safe method", "A synchronized block", 2],
      ["What is Java Reflection?", "Mirroring class structure", "Inspecting and modifying class behavior at runtime", "Cloning objects", "A serialization technique", 2],
      ["What is the diamond problem in Java?", "A memory leak", "Ambiguity caused by multiple inheritance", "A null pointer issue", "A generic type error", 2],
      ["What makes ConcurrentHashMap different from HashMap?", "No real difference", "ConcurrentHashMap is thread-safe for concurrent access", "HashMap is always faster", "ConcurrentHashMap uses less memory", 2],
      ["What is bytecode in Java?", "Machine code", "Intermediate code that the JVM executes", "A source code backup", "Native compiled code", 2],
      ["What is the Singleton pattern?", "Allows many instances", "Ensures only one instance of a class exists", "An abstract factory pattern", "An observer pattern", 2],
      ["What does Stream.parallel() do?", "Slows execution down", "Processes the stream using multiple threads", "Filters the stream", "Sorts the stream", 2],
      ["What is a functional interface?", "Interface with many methods", "Interface with exactly one abstract method", "Abstract class type", "An enum type", 2],
      ["What is try-with-resources used for?", "Trying multiple values", "Automatically closing resources after the block ends", "Handling multiple exceptions", "Retrying on failure", 2],
      ["What does the transient keyword do?", "Makes field thread-safe", "Excludes a field from serialization", "Makes field static", "Creates a temporary variable", 2]
    ]
  },

  DBMS: {
    easy: [
      ["DBMS stands for?", "Data Base Management System", "Digital Binary Management System", "Data Backup Master Service", "Database Modification System", 1],
      ["SQL stands for?", "Structured Query Language", "Simple Query List", "Standard Quick Language", "System Query Logic", 1],
      ["Which SQL command is used to retrieve data?", "INSERT", "DELETE", "SELECT", "UPDATE", 3],
      ["A row in a table is also called a?", "Column", "Field", "Record", "Schema", 3],
      ["A primary key must be?", "Duplicate is allowed", "Null is allowed", "Unique and not null", "A foreign reference", 3],
      ["Which command is used to add new data?", "UPDATE", "INSERT INTO", "ADD", "CREATE", 2],
      ["NULL in a database means?", "Zero value", "Empty string", "No value is present", "Boolean false", 3],
      ["DDL stands for?", "Data Definition Language", "Data Display Layer", "Database Design List", "Dynamic Data Load", 1],
      ["Which is NOT a DDL command?", "CREATE", "ALTER", "SELECT", "DROP", 3],
      ["A foreign key refers to?", "Same table always", "Primary key of another table", "Any column", "An index column", 2]
    ],
    medium: [
      ["What is normalization in DBMS?", "Adding more data to tables", "Organizing data to reduce redundancy", "Taking a database backup", "Encrypting data", 2],
      ["What is a JOIN in SQL?", "Splitting a table", "Combining rows from two or more tables", "Deleting records", "Creating an index", 2],
      ["What does 1NF require?", "No primary key", "Each column must have atomic (single) values", "No foreign keys", "Only 3 columns allowed", 2],
      ["What is a View in a database?", "A physical copy of a table", "A virtual table based on a SELECT query", "A backup file", "A stored procedure", 2],
      ["ACID properties in database stand for?", "Atomicity, Consistency, Isolation, Durability", "Auto, Create, Insert, Delete", "Access, Cache, Index, Data", "Async, Commit, Integrate, Deploy", 1],
      ["What is a database index used for?", "Creating a copy of table", "Speeding up data search and retrieval", "Adding a constraint", "Identifying rows only", 2],
      ["What is GROUP BY used for in SQL?", "Sorting rows", "Filtering individual rows", "Grouping rows that have same column values", "Joining two tables", 3],
      ["What is a stored procedure?", "A saved query result", "A pre-written SQL block that can be called anytime", "A table backup method", "A user account type", 2],
      ["The HAVING clause is used to?", "Filter individual rows", "Filter results after GROUP BY is applied", "Filter columns", "Filter tables", 2],
      ["What is a database transaction?", "A single SQL statement only", "A set of SQL operations treated as one unit", "A table creation script", "A user session", 2]
    ],
    hard: [
      ["What is a deadlock in DBMS?", "A slow running query", "Two transactions waiting on each other permanently", "A database crash", "A memory overflow", 2],
      ["What does the CAP theorem say?", "A system can always have all three guarantees", "You can only guarantee 2 of 3: Consistency, Availability, Partition tolerance", "Caching improves all performance", "Columns and partitions are related", 2],
      ["What is sharding in databases?", "An encryption method", "Splitting a large database horizontally across servers", "A backup strategy", "A query optimization trick", 2],
      ["What is the phantom read problem?", "A dirty read issue", "New rows appearing when a query is re-run in same transaction", "A lost update problem", "An uncommitted read", 2],
      ["What is a clustered index?", "An index stored separately from data", "Data rows physically sorted by the index key", "A duplicate index", "A foreign key index", 2],
      ["What is denormalization?", "Removing all primary keys", "Adding some redundancy intentionally to improve read speed", "Adding more normal forms", "Splitting tables further", 2],
      ["MVCC stands for?", "Multi-Version Concurrency Control", "Master View Cache Control", "Multiple Value Column Check", "Managed Version Config", 1],
      ["What is a trigger in DBMS?", "A manual SQL command", "An automatic action that runs on insert, update, or delete", "A stored function", "A scheduled job", 2],
      ["Difference between DELETE and TRUNCATE?", "No difference at all", "DELETE removes specific rows, TRUNCATE removes all rows faster", "TRUNCATE can always be rolled back", "DELETE is much faster", 2],
      ["What is referential integrity?", "Checking data types match", "Ensuring foreign key values match existing primary keys", "Validating indexes", "Ensuring backup is consistent", 2]
    ]
  },

  DS: {
    easy: [
      ["What is an Array?", "A dynamic size collection", "A fixed-size sequential collection", "Key-value pairs", "Linked nodes", 2],
      ["Stack follows which principle?", "FIFO", "LIFO", "Random access", "Priority order", 2],
      ["Queue follows which principle?", "LIFO", "FIFO", "Stack order", "Random access", 2],
      ["Each node in a linked list stores?", "Only data", "Only a pointer", "Data and a pointer to next node", "Only an index", 3],
      ["A binary tree has at most how many children per node?", "1", "2", "3", "4", 2],
      ["Which is a linear data structure?", "Tree", "Graph", "Array", "Heap", 3],
      ["Time complexity of binary search is?", "O(n)", "O(n squared)", "O(log n)", "O(1)", 3],
      ["A leaf node is a node that has?", "Two children", "No children", "One child only", "A parent only", 2],
      ["Average time complexity of hash table lookup?", "O(n)", "O(log n)", "O(1)", "O(n squared)", 3],
      ["Which traversal visits the root first?", "Inorder", "Postorder", "Preorder", "Level order", 3]
    ],
    medium: [
      ["In a Min-Heap, the root contains?", "The maximum element", "The minimum element", "A sorted array", "A random element", 2],
      ["DFS internally uses which data structure?", "Queue", "Stack or recursion", "Priority queue", "Deque", 2],
      ["BFS internally uses which data structure?", "Stack", "Recursion", "Queue", "An array", 3],
      ["An AVL tree maintains?", "Maximum height possible", "Balanced height at all times", "Minimum number of nodes", "Sorted order only", 2],
      ["What is dynamic programming?", "A dynamic typing feature", "Solving problems by reusing results of subproblems", "Runtime polymorphism", "A sorting algorithm", 2],
      ["Merge sort time complexity is?", "O(n)", "O(n log n)", "O(n squared)", "O(log n)", 2],
      ["In a circular linked list, the last node points to?", "Null", "The first node (head)", "The previous node", "Itself", 2],
      ["A deque is?", "A double-ended queue", "A priority queue", "A type of stack", "A circular queue only", 1],
      ["Dijkstra's algorithm is used to find?", "Minimum spanning tree", "Shortest path in a graph", "Maximum flow", "Topological ordering", 2],
      ["Quicksort average time complexity is?", "O(n squared)", "O(n log n)", "O(n)", "O(log n)", 2]
    ],
    hard: [
      ["What is a skip list?", "An incomplete linked list", "A multi-level linked list for fast searching", "A sorted array type", "A tree variant", 2],
      ["Floyd-Warshall algorithm finds?", "Single source shortest path", "All pairs shortest paths in a graph", "Minimum spanning tree", "Connected components", 2],
      ["Topological sort works on?", "Any undirected graph", "A Directed Acyclic Graph (DAG)", "A weighted graph only", "A complete graph only", 2],
      ["What is a segment tree best used for?", "Sorting arrays", "Efficient range queries and point updates", "Graph traversal", "Handling hash collisions", 2],
      ["What is Union-Find data structure used for?", "Merge sort utility", "Managing disjoint sets and union operations", "Tree balancing", "Graph coloring", 2],
      ["In Dijkstra's algorithm, a min-heap is used to?", "Store all visited nodes", "Efficiently get the node with minimum distance", "Sort all graph edges", "Count total edges", 2],
      ["Kruskal's algorithm builds?", "Shortest path tree", "Minimum spanning tree using sorted edges", "Maximum flow path", "Cycle only", 2],
      ["Amortized time complexity means?", "Always worst case", "Average cost spread over a sequence of operations", "Best case only", "Space complexity", 2],
      ["What is memoization in dynamic programming?", "Memorizing source code", "Caching results of subproblems to avoid recomputation", "Stack overflow prevention", "A type of recursion", 2],
      ["Inorder traversal of a BST gives?", "Random order", "Sorted ascending order", "Reverse sorted order", "Level-by-level order", 2]
    ]
  },

  C: {
    easy: [
      ["C language was developed by?", "Linus Torvalds", "Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", 2],
      ["printf() function is used for?", "Taking input from user", "Printing output to the console", "Reading from a file", "Math operations", 2],
      ["Which is a valid data type in C?", "integer", "int", "number", "whole", 2],
      ["C is a __ programming language.", "Object-oriented", "Procedural", "Functional", "Logical", 2],
      ["scanf() function is used for?", "Printing output", "Taking input from the user", "File operations", "Memory allocation", 2],
      ["What does #include do in C?", "Declares variables", "Includes a header file into the program", "Creates functions", "Loops the code", 2],
      ["Array index in C starts from?", "1", "0", "-1", "2", 2],
      ["Which operator gives the memory address of a variable?", "*", "&", "->", ".", 2],
      ["void as a return type means?", "Returns zero", "The function returns nothing", "Returns null", "An error type", 2],
      ["A C program starts executing from?", "First function defined", "The main() function", "The include section", "Variable declarations", 2]
    ],
    medium: [
      ["What is a pointer in C?", "A variable storing a value", "A variable storing a memory address", "A type of array", "A function reference", 2],
      ["What does malloc() do in C?", "Frees memory", "Allocates memory on the heap at runtime", "Declares arrays", "Copies memory blocks", 2],
      ["What is a structure in C?", "A group of functions", "A user-defined type that groups different variables", "A type of array", "A pointer type", 2],
      ["What does free() do in C?", "Allocates memory", "Releases memory that was allocated with malloc", "Prints a value", "Initializes a pointer", 2],
      ["What is recursion?", "A type of loop", "A function that calls itself", "Multiple return values", "A global variable", 2],
      ["What is a dangling pointer?", "A pointer with NULL value", "A pointer pointing to already freed memory", "An uninitialized pointer", "A constant pointer", 2],
      ["What does typedef do in C?", "Creates a new variable", "Creates an alias or new name for a data type", "Imports a library", "Defines a constant", 2],
      ["What is a segmentation fault?", "A compile-time error", "Accessing memory that the program is not allowed to access", "Division by zero error", "A stack overflow", 2],
      ["What does static variable inside a function do?", "Makes it a constant", "Retains its value between function calls", "Dynamic allocation", "Thread-safe behavior", 2],
      ["Difference between array name and pointer in C?", "They are exactly the same", "Array is a fixed address, pointer variable can be reassigned", "Pointer is always faster", "No practical difference", 2]
    ],
    hard: [
      ["What is a function pointer in C?", "A pointer to data", "A pointer holding the memory address of a function", "A return type pointer", "A struct pointer", 2],
      ["What does the volatile keyword do in C?", "Makes variable constant", "Tells the compiler not to optimize this variable", "Creates a thread-safe variable", "Allocates extra memory", 2],
      ["What is endianness?", "An error handling method", "The byte order in which values are stored in memory", "A pointer technique", "A file encoding format", 2],
      ["Difference between stack and heap memory?", "They are the same thing", "Stack is for local variables, heap is for dynamic allocation", "Heap is always faster", "Stack has unlimited size", 2],
      ["What happens when you dereference a NULL pointer?", "Returns zero", "Causes undefined behavior or a crash", "Returns an empty string", "The operation is skipped", 2],
      ["What is a memory leak in C?", "Fast memory access technique", "Dynamically allocated memory that is never freed", "A stack overflow error", "A cache miss", 2],
      ["What does sizeof() return in C?", "The value of a variable", "The size in bytes of a type or variable", "The memory address", "The array length", 2],
      ["What is a union in C?", "A structure with all fields", "A type where all members share the same memory space", "A linked list node", "A group of functions", 2],
      ["Difference between ++i and i++?", "No difference at all", "++i increments before use, i++ increments after use", "i++ is always faster", "++i only works inside loops", 2],
      ["What does const keyword do to a variable?", "Makes it global", "Prevents the value from being changed after assignment", "Allocates it on the heap", "Makes it thread-safe", 2]
    ]
  },

  "C++": {
    easy: [
      ["C++ language was created by?", "Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum", 2],
      ["OOP stands for?", "Object Oriented Programming", "Open Object Process", "Optional Object Pattern", "Only One Process", 1],
      ["Which is NOT a pillar of OOP?", "Encapsulation", "Polymorphism", "Compilation", "Inheritance", 3],
      ["cout in C++ is used for?", "Taking input", "Displaying output to screen", "Writing comments", "Loops", 2],
      ["cin in C++ is used for?", "Displaying output", "Writing comments", "Taking input from user", "Calling functions", 3],
      ["A class in C++ is?", "A function", "A blueprint for creating objects", "A type of array", "A loop type", 2],
      ["An object in C++ is?", "A function call", "An instance created from a class", "A variable type", "A loop", 2],
      ["The scope resolution operator in C++ is?", ".", "->", "::", ":", 3],
      ["A constructor is called when?", "Object is deleted", "Object is created", "Object is copied", "A function is called", 2],
      ["A destructor is used to?", "Create new objects", "Clean up resources when an object is destroyed", "Copy an object", "Initialize variables", 2]
    ],
    medium: [
      ["What is function overloading in C++?", "Overriding virtual functions", "Same function name with different parameter lists", "Multiple inheritance", "Abstract class usage", 2],
      ["What is a virtual function?", "Compile-time binding only", "A function that enables runtime polymorphism", "A static function", "An inline function", 2],
      ["STL in C++ stands for?", "Standard Template Language", "Standard Template Library", "Static Type List", "System Thread Layer", 2],
      ["What are templates in C++ used for?", "Writing HTML inside C++", "Writing code that works with any data type", "Using function pointers", "Creating class aliases", 2],
      ["What is operator overloading?", "Overriding existing functions", "Giving custom behavior to operators for user-defined types", "Using multiple operators", "Bitwise operations only", 2],
      ["What is a smart pointer?", "A regular pointer", "A pointer that automatically manages memory lifetime", "A constant pointer", "A void pointer", 2],
      ["What does the this pointer refer to?", "The parent class", "The current object's memory address", "A base class method", "A static member", 2],
      ["Difference between class and struct in C++?", "No difference at all", "Class members are private by default, struct members are public", "Struct cannot have functions", "Class uses less memory", 2],
      ["What is a copy constructor used for?", "It is the default constructor", "Creating a new object as a copy of an existing object", "A destructor variant", "A static constructor", 2],
      ["What is inheritance used for in C++?", "Memory management only", "A class can acquire properties and methods from another class", "Function overloading only", "Creating templates", 2]
    ],
    hard: [
      ["What is the vtable in C++?", "An STL container", "A table used internally to resolve virtual function calls", "A variable table", "A template table", 2],
      ["What is RAII in C++?", "A random access pattern", "Managing resources by tying them to object lifetime", "A runtime interface", "An array initialization method", 1],
      ["What does std::move do in C++?", "Copies an object", "Transfers ownership of resources to another object", "Moves an iterator forward", "Sorts a container", 2],
      ["What is a pure virtual function?", "A virtual function with a body", "A virtual function with no body that makes the class abstract", "An overloaded function", "A static virtual function", 2],
      ["What is multiple inheritance?", "Calling a method multiple times", "A class inheriting from more than one base class", "Overloading constructors", "Template specialization", 2],
      ["What does the explicit keyword prevent?", "Function overloading", "Implicit type conversions in constructors", "Virtual function calls", "Template instantiation", 2],
      ["What is a friend function in C++?", "A regular member function", "A non-member function that can access private class members", "An inherited function", "A static method", 2],
      ["What is the Rule of Three in C++?", "Three levels of inheritance", "If you define destructor, copy constructor, or copy assignment, define all three", "Three template parameters", "Three virtual functions", 2],
      ["What is an abstract class?", "A class with no methods at all", "A class with at least one pure virtual function", "A class marked as private", "A final class", 2],
      ["Difference between new and malloc in C++?", "No difference in C++", "new calls the constructor, malloc only allocates raw memory", "malloc is always faster", "new is the old C-style way", 2]
    ]
  },

  Web: {
    easy: [
      ["HTML stands for?", "Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyper Tool Multi Language", 2],
      ["CSS stands for?", "Computer Style Sheets", "Cascading Style Sheets", "Creative Style Syntax", "Coded Style System", 2],
      ["Which HTML tag creates a hyperlink?", "<link>", "<a>", "<href>", "<url>", 2],
      ["Which CSS property is used to change text color?", "font-color", "text-color", "color", "foreground", 3],
      ["DOM stands for?", "Document Object Model", "Data Object Method", "Display Object Model", "Document Order Map", 1],
      ["Which heading tag is the largest?", "<h6>", "<head>", "<h1>", "<title>", 3],
      ["JavaScript by default runs on which side?", "Server only", "Client (browser) side", "Database side", "Both equally", 2],
      ["What does the CSS margin property do?", "Adds color", "Creates space outside an element", "Creates a border", "Adds padding inside", 2],
      ["What is a responsive website?", "A fast loading site", "A site that adjusts layout to fit all screen sizes", "A dark themed site", "An animated site", 2],
      ["HTTP stands for?", "HyperText Transfer Protocol", "Home Text Transfer Process", "Hyper Transfer Text Program", "High Text Type Protocol", 1]
    ],
    medium: [
      ["What is Flexbox in CSS used for?", "Creating CSS animations", "Arranging items in a row or column layout easily", "Structuring HTML", "JavaScript DOM manipulation", 2],
      ["Difference between == and === in JavaScript?", "They are the same", "=== also checks the data type, == does not", "== is always faster", "=== is only for strings", 2],
      ["What is localStorage in JavaScript?", "Server-side storage", "Browser storage that persists after closing the tab", "A type of database", "A special cookie", 2],
      ["What does async/await do in JavaScript?", "Only useful in loops", "Makes asynchronous code easier to read and write", "Creates new browser threads", "Used for CSS animations", 2],
      ["What is a media query in CSS?", "A database query", "A CSS rule that applies styles based on screen size", "A JavaScript API call", "An HTML attribute", 2],
      ["What is the purpose of a Promise in JavaScript?", "An HTML tag", "Represents the eventual result of an asynchronous operation", "A CSS variable", "An event handler type", 2],
      ["What does position: absolute do in CSS?", "Keeps element in normal flow", "Positions element relative to nearest positioned parent", "Fixes element to the viewport", "Removes element from the page completely", 2],
      ["Difference between id and class in HTML/CSS?", "No difference at all", "id is unique per page, class can be used on multiple elements", "class selector is always faster", "id can be reused on multiple elements", 2],
      ["What does event.preventDefault() do?", "Stops all JavaScript execution", "Prevents the default browser action for an event", "Removes an event listener", "Refreshes the current page", 2],
      ["What is semantic HTML?", "Stylish-looking HTML", "Using HTML tags that clearly describe their meaning", "Compressed or minified HTML", "Dynamically generated HTML", 2]
    ],
    hard: [
      ["What is the Critical Rendering Path?", "A CSS animation path", "Steps the browser takes to convert HTML/CSS to pixels", "JavaScript execution order", "The network request path", 2],
      ["What is a Service Worker?", "A backend web server", "A background script enabling offline and PWA features", "A CSS processing worker", "A database background worker", 2],
      ["What is CORS?", "A CSS property name", "A browser security rule for cross-origin requests", "A content rendering specification", "A code review standard", 2],
      ["What is tree shaking in modern web bundlers?", "A CSS animation technique", "Removing unused code from the final JavaScript bundle", "A DOM traversal method", "A sorting algorithm", 2],
      ["Difference between SSR and CSR?", "They are the same thing", "SSR renders HTML on the server, CSR renders it in the browser", "SSR is always faster no matter what", "CSR is always more secure", 2],
      ["What is Content Security Policy (CSP)?", "A file size restriction", "An HTTP header that helps prevent XSS attacks", "A cookie setting", "A CORS configuration", 2],
      ["What is a Web Worker in JavaScript?", "A browser plugin type", "JavaScript running in background without blocking the main thread", "A server-side worker", "A CSS post-processor", 2],
      ["What is lazy loading?", "A slow website behavior", "Loading resources only when they are actually needed", "A caching technique", "Pre-loading all resources at start", 2],
      ["What is the Virtual DOM used for?", "A copy stored in browser memory", "A lightweight in-memory copy for fast comparison before real DOM updates", "The Shadow DOM technique", "Server-side rendering DOM", 2],
      ["What does debouncing mean in JavaScript?", "Removing event listeners", "Delaying a function call until user stops triggering it repeatedly", "Batching multiple API calls", "Blocking all browser events", 2]
    ]
  },

  OS: {
    easy: [
      ["OS stands for?", "Open Software", "Operating System", "Object Structure", "Output System", 2],
      ["A process is best described as?", "A file stored on disk", "A program that is currently running", "A network packet", "A memory block", 2],
      ["A thread is?", "A network connection", "A smaller unit of execution inside a process", "A file type", "A type of CPU", 2],
      ["Virtual memory is used to?", "Add physical RAM chips", "Give programs the illusion of more memory than available", "Speed up the CPU", "Manage network traffic", 2],
      ["CPU scheduling decides?", "Which file to open next", "Which process gets to use the CPU next", "How much RAM to allocate", "Which I/O device to use", 2],
      ["A file system is responsible for?", "Managing internet traffic", "Organizing and managing files on storage devices", "Running user processes", "Managing RAM directly", 2],
      ["The kernel is?", "The graphical user interface", "The core part of the OS that manages hardware", "An application-level service", "A network management layer", 2],
      ["Multiprogramming means?", "Using multiple programming languages", "Keeping multiple programs in memory at the same time", "Having multiple CPUs", "Using multiple monitors", 2],
      ["An I/O bound process spends most time on?", "CPU calculations", "Input and Output operations", "Memory usage", "Network calls", 2],
      ["Context switching means?", "Switching between files", "Saving current process state and loading another process", "Swapping memory pages", "Creating a new thread", 2]
    ],
    medium: [
      ["What is a semaphore in OS?", "A network protocol", "A variable used to control access to shared resources", "A file descriptor type", "A process type", 2],
      ["What is a deadlock?", "A complete system crash", "Processes waiting on each other forever, none can proceed", "A type of memory leak", "A disk failure", 2],
      ["What is thrashing in OS?", "Deleting system files", "Excessive paging that drastically reduces system performance", "CPU overheating", "Network congestion", 2],
      ["What is a page fault?", "Always a critical error", "Required page is not in RAM and must be loaded from disk", "A page being deleted", "A CPU cache miss", 2],
      ["Difference between process and thread?", "They are exactly the same", "Process has its own memory space, threads share it", "Threads are always slower", "Processes always share memory", 2],
      ["What is a mutex used for?", "A network protocol type", "Preventing multiple threads from accessing shared data at once", "A file descriptor type", "A CPU register type", 2],
      ["LRU page replacement algorithm means?", "Load the Recently Used page", "Remove the page that was least recently used when RAM is full", "Load the largest page first", "Remove the newest page", 2],
      ["What is an inode in a file system?", "An internet node", "A data structure storing metadata about a file", "A process identifier", "A memory block unit", 2],
      ["What is a system call?", "A function call in user code", "A way for user programs to request services from the OS kernel", "A network request type", "An inter-process message", 2],
      ["Round Robin CPU scheduling gives?", "Priority to the shortest job", "Equal CPU time slices to each process in turn", "CPU to highest priority only", "Random CPU time allocation", 2]
    ],
    hard: [
      ["Preemptive vs non-preemptive scheduling?", "They are the same", "Preemptive can interrupt a running process, non-preemptive cannot", "Non-preemptive is always faster", "Preemptive uses more memory", 2],
      ["What is memory fragmentation?", "Memory data corruption", "Wasted unusable gaps between allocated memory blocks", "Memory encryption issue", "A swap space error", 2],
      ["What is Copy-on-Write in OS?", "A file backup method", "Pages are shared between processes until one modifies them, then copied", "A write buffer technique", "A cache replacement policy", 2],
      ["The Banker's Algorithm is used for?", "Managing financial transactions", "Deadlock avoidance by checking for safe resource allocation states", "Memory allocation only", "CPU scheduling only", 2],
      ["What is a hypervisor?", "An extremely fast CPU", "Software that creates and manages virtual machines on hardware", "A network controller", "A type of file system", 2],
      ["Difference between hard IRQ and soft IRQ?", "Only speed is different", "Hard IRQ handles hardware interrupts, soft IRQ handles deferred work", "They are identical in function", "Soft IRQ is always synchronous", 2],
      ["What is a memory barrier instruction?", "A physical RAM divider", "An instruction that ensures memory operations happen in the correct order", "A CPU cache size limit", "A memory page boundary", 2],
      ["What is spooling in an operating system?", "A network buffering technique", "Storing data in a buffer so slow devices can process it at their own pace", "A memory swap operation", "A CPU scheduling method", 2],
      ["Difference between internal and external fragmentation?", "They are the same thing", "Internal is wasted space inside an allocation, external is between allocations", "External is always worse", "Internal only happens with heap memory", 2],
      ["What is a real-time OS used for?", "General everyday computing", "Systems that must respond to events within a guaranteed time limit", "Gaming systems only", "Web servers only", 2]
    ]
  }

};

// ==================
// Quiz State
// ==================

var currentSubject = "";
var currentDifficulty = "";
var questions = [];
var currentIndex = 0;
var score = 0;
var attempted = 0;
var timeLeft = 15;
var timerInterval;
var userAnswers = [];

// ==================
// Initialize on page load
// ==================

$(document).ready(function() {

  // Read from localStorage
  currentSubject = localStorage.getItem("quizSubject") || "Web";
  currentDifficulty = localStorage.getItem("quizDifficulty") || "easy";

  // Safety: fallback if subject doesn't exist
  if (!allQuestions[currentSubject]) {
    currentSubject = "Web";
  }
  if (!allQuestions[currentSubject][currentDifficulty]) {
    currentDifficulty = "easy";
  }

  // Load the correct question set
  questions = allQuestions[currentSubject][currentDifficulty];

  // Initialize answers array with null (not answered yet)
  for (var i = 0; i < questions.length; i++) {
    userAnswers.push(null);
  }

  // Show first question
  showQuestion();

  // Next / Submit button
  $("#nextBtn").click(function() {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      showQuestion();
    } else {
      finishQuiz();
    }
  });

  // Previous button
  $("#prevBtn").click(function() {
    if (currentIndex > 0) {
      currentIndex--;
      showQuestion();
    }
  });

});

// ==================
// Display question
// ==================

function showQuestion() {

  var q = questions[currentIndex];
  var letters = ["A", "B", "C", "D"];

  // Update top labels
  $("#qno").text("Question " + (currentIndex + 1) + " / " + questions.length);
  $("#subjectBadge").text(currentSubject + " · " + currentDifficulty.toUpperCase());

  // Set question text
  $("#question").text(q[0]);

  // Build options
  $("#options").html("");

  for (var i = 1; i <= 4; i++) {
    var html = '<div class="option" id="opt' + i + '" data-index="' + i + '">'
      + '<span class="opt-letter">' + letters[i - 1] + '</span>'
      + '<label>' + q[i] + '</label>'
      + '<input type="radio" name="opt">'
      + '</div>';
    $("#options").append(html);
  }

  // Handle option click
  $(".option").click(function() {
    var picked = parseInt($(this).data("index"));
    checkAnswer(picked);
  });

  // Highlight if this question was already answered
  showSavedAnswer();

  // Disable prev on first question
  $("#prevBtn").prop("disabled", currentIndex === 0);

  // Last question shows Submit
  if (currentIndex === questions.length - 1) {
    $("#nextBtn").text("Submit Quiz");
  } else {
    $("#nextBtn").text("Next →");
  }

  // Start countdown timer
  startTimer();
}

// ==================
// Highlight saved answer
// ==================

function showSavedAnswer() {

  var savedAnswer = userAnswers[currentIndex];
  if (savedAnswer === null) return;

  var correctAnswer = questions[currentIndex][5];

  if (savedAnswer === correctAnswer) {
    // User was correct - show green
    $("#opt" + correctAnswer).addClass("correct");
  } else {
    // User was wrong - show red on their choice, green on correct
    $("#opt" + savedAnswer).addClass("wrong");
    $("#opt" + correctAnswer).addClass("correct");
  }
}

// ==================
// Countdown timer
// ==================

function startTimer() {

  clearInterval(timerInterval);

  // If already answered, no need to run timer
  if (userAnswers[currentIndex] !== null) return;

  timeLeft = 15;
  $("#timerFill").css("width", "100%");
  $("#timerText").text("15s");

  timerInterval = setInterval(function() {

    timeLeft--;

    // Update bar width
    var percent = (timeLeft / 15) * 100;
    $("#timerFill").css("width", percent + "%");
    $("#timerText").text(timeLeft + "s");

    // Turn red when 5 seconds or less remain
    if (timeLeft <= 5) {
      $("#timerFill").css("background", "linear-gradient(90deg, #ef4444, #f97316)");
    } else {
      $("#timerFill").css("background", "linear-gradient(90deg, #38bdf8, #a78bfa)");
    }

    // Time ran out - move to next question automatically
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      if (currentIndex < questions.length - 1) {
        currentIndex++;
        showQuestion();
      } else {
        finishQuiz();
      }
    }

  }, 1000);
}

// ==================
// Handle answer selection
// ==================

function checkAnswer(selected) {

  // Once answered, don't allow change
  if (userAnswers[currentIndex] !== null) return;

  // Stop timer
  clearInterval(timerInterval);

  // Save the user's choice
  userAnswers[currentIndex] = selected;
  attempted++;

  var correctAnswer = questions[currentIndex][5];

  // Check if correct
  if (selected === correctAnswer) {
    score++;
  }

  // Show visual feedback
  showSavedAnswer();
}

// ==================
// End quiz and save results
// ==================

function finishQuiz() {

  clearInterval(timerInterval);

  // Prepare review data for result page
  var reviewData = [];

  for (var i = 0; i < questions.length; i++) {
    var q = questions[i];
    reviewData.push({
      question: q[0],
      options: [q[1], q[2], q[3], q[4]],
      correct: q[5],
      userAnswer: userAnswers[i]
    });
  }

  // Save everything to localStorage
  localStorage.setItem("quizReview", JSON.stringify(reviewData));
  localStorage.setItem("quizScore", score);
  localStorage.setItem("quizTotal", questions.length);
  localStorage.setItem("quizAttempted", attempted);
  localStorage.setItem("quizSubjectUsed", currentSubject);
  localStorage.setItem("quizDifficultyUsed", currentDifficulty);

  // Go to result page
  window.location.href = "result.html?score=" + score + "&total=" + questions.length + "&attempted=" + attempted;
}
