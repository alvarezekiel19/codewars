class FileMaster():
    def __init__(self, filepath):
        x = filepath.rfind('.')
        y = filepath.rfind('/')

        self.ext = filepath[x + 1:]
        self.file = filepath[y + 1: x]
        self.path = filepath[: y + 1]

    def extension(self):
        return self.ext

    def filename(self):
        return self.file

    def dirpath(self):
        return self.path
