oc adm policy add-scc-to-user anyuid -z default -n default

oc label namespace default argocd.argoproj.io/managed-by=openshift-gitops --overwrite