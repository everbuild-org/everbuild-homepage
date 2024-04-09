import git, re, os

repo = git.Repo(".")

# Recursively replace reg.everbuild.org/everbuild-homepage:[whatever] with reg.everbuild.org/everbuild-homepage:$PLUGIN_TAG in deployment/*

plugin_tag = os.getenv("PLUGIN_TAG")

def replace_versions(contents):
    return re.sub(r"reg\.everbuild\.org/everbuild-homepage:\d+\.\d+\.\d+", "reg.everbuild.org/everbuild-homepage:"+plugin_tag, contents)

for root, dirs, files in os.walk("deployment"):
    for file in files:
        if file.endswith(".yaml") or file.endswith(".yml"):
            with open(os.path.join(root, file), "r") as f:
                contents = f.read()
            contents = replace_versions(contents)
            with open(os.path.join(root, file), "w") as f:
                f.write(contents)

print("Bumped plugin tag in deployment files to "+plugin_tag+"!")

# Commit and push changes
repo.index.add(["deployment"])
repo.index.commit("chore: Bump version to "+plugin_tag + " [CI SKIP]")


print("Committed changes to deployment files!")

project_dir = os.path.dirname(os.path.abspath(__file__))
os.environ['GIT_ASKPASS'] = os.path.join(project_dir, 'ci/askpass.py')

branch = os.getenv("BRANCH")

os.system("git push origin HEAD:"+branch)